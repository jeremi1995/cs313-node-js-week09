const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Views
app.set("views", "views");
app.set("view engine", "ejs");

//Control
app.get("/", (req, res) => {
  console.log("Received request for " + req.url);

  res.render("pages/assign09-welcome");
});

app.post("/getRate", (req, res) => {
  console.log("Received request for " + req.url);
  let rate = calculateRate(Number(req.body.weight), req.body.type);

  let param = { result: rate.toFixed(2) };
  res.render("partials/assign09-postageDisplay", param);
});

app.listen(PORT, () => { console.log("listening on port " + PORT); });

//Model
function rateStamped(weight) {
  if (weight >= 0 && weight <= 1) {
    return 0.55;
  }
  else if (weight > 1 && weight <= 2) {
    return 0.70;
  }
  else if (weight > 2 && weight <= 3) {
    return 0.85;
  }
  else if (weight > 3 && weight <= 3.5) {
    return 1.00;
  }
}

function rateMetered(weight) {
  if (weight >= 0 && weight <= 1) {
    return 0.50;
  }
  else if (weight > 1 && weight <= 2) {
    return 0.65;
  }
  else if (weight > 2 && weight <= 3) {
    return 0.80;
  }
  else if (weight > 3 && weight <= 3.5) {
    return 0.95;
  }
}

function rateFlats(weight) {
  if (weight >= 0 && weight <= 1) {
    return 1.00;
  }
  else if (weight > 1 && weight <= 2) {
    return 1.20;
  }
  else if (weight > 2 && weight <= 3) {
    return 1.40;
  }
  else if (weight > 3 && weight <= 4) {
    return 1.60;
  }
  else if (weight > 4 && weight <= 5) {
    return 1.80;
  }
  else if (weight > 5 && weight <= 6) {
    return 2.00;
  }
  else if (weight > 6 && weight <= 7) {
    return 2.20;
  }
  else if (weight > 7 && weight <= 8) {
    return 2.40;
  }
  else if (weight > 8 && weight <= 9) {
    return 2.60;
  }
  else if (weight > 9 && weight <= 10) {
    return 2.80;
  }
  else if (weight > 10 && weight <= 11) {
    return 3.00;
  }
  else if (weight > 11 && weight <= 12) {
    return 3.20;
  }
  else if (weight > 12 && weight <= 13) {
    return 3.40;
  }
}

function ratePackage(weight) {
  return 0.00;
}

function calculateRate(weight, mailType) {
  let rate = 0;

    if (mailType == "stamped") {
      rate = rateStamped(weight);
    }
    else if (mailType == "metered") {
      rate = rateMetered(weight);
    }
    else if (mailType == "flats") {
      rate = rateFlats(weight);
    }
    else if (mailType == "package") {
      rate = ratePackage(weight);
    }

  return rate;
}