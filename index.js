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

app.get("/assign09", (req, res) => {
  console.log("Received request for " + req.url);

  res.render("pages/assign09");
});

app.post("/getRate", (req, res) => {
  console.log("Received request for " + req.url);
  let type = typeToString(req.body.type);
  let weight = Number(req.body.weight);
  let rate = 0;

  if (req.body.zone) {
    rate = calculateRate(req.body.type, weight, req.body.zone);
  }
  else {
    rate = calculateRate(req.body.type, weight)
  }

  let param = { result: rate.toFixed(2), mailType: type, weight: weight };
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
  else {
    return -1;
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
  else {
    return -1;
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
  else {
    return -1;
  }
}

function ratePackage(weight, zone) {
  if (zone == 1) {
    if (weight >= 0 && weight <= 4) {
      return 3.80;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.60;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.30;
    }
    else if (weight > 12 && weight <= 13) {
      return 5.90;
    }
    else { return -1; }
  }
  else if (zone == 3) {
    if (weight >= 0 && weight <= 4) {
      return 3.85;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.65;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.35;
    }
    else if (weight > 12 && weight <= 13) {
      return 5.95;
    }
    else { return -1; }
  }
  else if (zone == 4) {
    if (weight >= 0 && weight <= 4) {
      return 3.90;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.70;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.40;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.05;
    }
    else { return -1; }
  }
  else if (zone == 5) {
    if (weight >= 0 && weight <= 4) {
      return 3.95;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.75;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.45;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.15;
    }
    else { return -1; }
  }
  else if (zone == 6) {
    if (weight >= 0 && weight <= 4) {
      return 4.00;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.80;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.50;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.20;
    }
    else { return -1; }
  }
  else if (zone == 7) {
    if (weight >= 0 && weight <= 4) {
      return 4.05;
    }
    else if (weight > 4 && weight <= 8) {
      return 4.90;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.65;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.40;
    }
    else { return -1; }
  }
  else if (zone == 8) {
    if (weight >= 0 && weight <= 4) {
      return 4.20;
    }
    else if (weight > 4 && weight <= 8) {
      return 5.00;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.75;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.50;
    }
    else { return -1; }
  }
  else if (zone == 9) {
    if (weight >= 0 && weight <= 4) {
      return 4.20;
    }
    else if (weight > 4 && weight <= 8) {
      return 5.00;
    }
    else if (weight > 8 && weight <= 12) {
      return 5.75;
    }
    else if (weight > 12 && weight <= 13) {
      return 6.50;
    }
    else { return -1; }
  }
  else {
    return -1;
  }
}

function calculateRate(mailType, weight, zone = 1) {
  let rate = 0;
  
  console.log("calculateRate function entered");
  console.log("mailType:" + mailType);
  console.log("weight: " + weight);
  console.log("zone: " + zone);

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
    rate = ratePackage(weight, zone);
  }

  return rate;
}

function typeToString(type) {
  switch (type) {
    case "stamped":
      return "Letters (Stamped)";
    case "metered":
      return "Letters (Metered)";
    case "flats":
      return "Large Envelopes (Flats)";
    case "package":
      return "First-Class Package Service—Retail";
    default:
      return "";
  }
}