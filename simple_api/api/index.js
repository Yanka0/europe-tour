const router = require("express").Router();
const {nanoid} = require("nanoid");
const mockEn = require("./mock/mockEn");
const mockRu = require("./mock/mockRu");
const mockPl = require("./mock/mockPl");

const { reply, getById, updateById } = require("./utils");
const path = require('path');
const fs = require('fs');


let currentLanguage = "en";
function getMock(language) {
  switch (language) {
    case "ru":
      return mockRu;
    case "pl":
      return mockPl;
    default:
      return mockEn;
  }
}

router.get("/countries", (req, res, next) => {
  const language = req.query.language||currentLanguage ;
  const mock = getMock(language);
  reply(res, mock.countries);
});

router.get("/country/:countryId", (req, res, next) => {
  const countryId = req.params?.countryId;
  const language = req.query.language ||currentLanguage;
  const mock = getMock(language);
  const country = getById(mock.countries)(countryId);
  reply(res, country);
});

router.get("/dates", (req, res, next) => {
  const { countryId, dateId } = req.query;
  const mock = getMock(currentLanguage);
  let result = mock.dates;

  if (countryId) {
    const country = getById(mock.countries)(countryId);
    if (country) {
      result = country.dates.map(getById(result));
    }
  }

  if (!countryId && dateId) {
    result = getById(result)(dateId);
  }
  reply(res, result);
});

router.get("/date/:dateId", (req, res, next) => {
  const dateId = req.params?.dateId;
  const mock = getMock(currentLanguage);
  const date = getById(mock.dates)(dateId);
  reply(res, date);
});

router.get("/reviews", (req, res, next) => {
  const { countryId } = req.query;
  const mock = getMock(currentLanguage);
  let result = mock.reviews;
  if (countryId) {
    const country = getById(mock.countries)(countryId);
    if (country) {
      result = country.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.post("/review/:countryId", (req, res, next) => {
  const body = req.body;
  const countryId = req.params?.countryId;
  const mock = getMock(currentLanguage);
  const country = countryId && getById(mock.countries)(countryId);
  let newReview = {};

  if (country && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    country.reviews.push(newReviewId);
    mock.reviews.push(newReview);
  }

  reply(res, newReview);
});

router.patch("/review/:reviewId", (req, res, next) => {
  const body = req.body;
  const reviewId = req.params?.reviewId;
  const mock = getMock(currentLanguage);
  let updatedReview;

  if (reviewId) {
    updatedReview = updateById(mock.reviews)(reviewId, body);
  }

  reply(res, updatedReview);
});

router.get("/users", (req, res, next) => {
  const mock = getMock(currentLanguage);
  reply(res, mock.users);
});

router.get("/img/:imageFileName", (req, res, next) => {
  const imageFileName = req.params?.imageFileName;
  const filePath = path.join(__dirname, 'img', imageFileName);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Если файл не существует, возвращаем ответ 404 Not Found
      res.status(404).send('File not found');
    } else {
      let contentType = 'application/octet-stream'; // Тип контента по умолчанию
      if (imageFileName.includes('.svg')) {
        contentType = 'image/svg+xml';
      }
      // Устанавливаем тип контента для ответа
      res.set('Content-Type', contentType);
      // Если файл существует, отправляем его содержимое клиенту
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    }
  });
});

module.exports = router;