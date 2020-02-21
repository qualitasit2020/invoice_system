require("dotenv").config();
const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res){
 res.send('Connected To NodeJS Server!');
});

const rolesRouter = require("./api/admin/masters/roles/roles.router");
app.use("/admin/masters/roles", rolesRouter);

const modulesRouter = require("./api/admin/masters/modules/modules.router");
app.use("/admin/masters/modules", modulesRouter);

const permissionsRouter = require("./api/admin/masters/permissions/permissions.router");
app.use("/admin/masters/permissions", permissionsRouter);

const taxclassesRouter = require("./api/admin/masters/taxclasses/taxclasses.router");
app.use("/admin/masters/taxclasses", taxclassesRouter);

const domainRouter = require("./api/admin/masters/domain/domain.router");
app.use("/admin/masters/domain", domainRouter);

const industryRouter = require("./api/admin/masters/industry/industry.router");
app.use("/admin/masters/industry", industryRouter);

const technologyRouter = require("./api/admin/masters/technology/technology.router");
app.use("/admin/masters/technology", technologyRouter);

const countriesRouter = require("./api/admin/masters/countries/countries.router");
app.use("/admin/masters/countries", countriesRouter);

const statesRouter = require("./api/admin/masters/states/states.router");
app.use("/admin/masters/states", statesRouter);

const citiesRouter = require("./api/admin/masters/cities/cities.router");
app.use("/admin/masters/cities", citiesRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
