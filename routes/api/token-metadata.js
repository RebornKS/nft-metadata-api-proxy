var express = require('express');
var router = express.Router();
var metadataRepo = require('../../helpers/metadata-repo')

router.get('/', function(req, res, next) {
  metadataRepo.getAll()
    .then((totalSupply) => {
      return res.json({totalSupply: totalSupply});
    })
});

router.get('/:tokenId', function(req, res, next) {
  let tokenId = parseInt(req.params.tokenId);
  try {
    metadataRepo.getById(tokenId)
      .then((data) => {
        return res.json(data);
      });
  } catch(err) {
    console.log("hello got error lah... " + err);
    return res.json("https://tortillatest.herokuapp.com/api/token-metadata/1.json")
  }
});

module.exports = router;
