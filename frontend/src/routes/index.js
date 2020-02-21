import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import Dashboard from '../components/admin/Dashboard';

import Roles from '../components/admin/masters/roles/Roles';
import AddRole from '../components/admin/masters/roles/AddRole';
import EditRole from '../components/admin/masters/roles/EditRole';

import Modules from '../components/admin/masters/modules/Modules';
import AddModule from '../components/admin/masters/modules/AddModule';
import EditModule from '../components/admin/masters/modules/EditModule';

import Permissions from '../components/admin/masters/permissions/Permissions';
import AddPermission from '../components/admin/masters/permissions/AddPermission';
import EditPermission from '../components/admin/masters/permissions/EditPermission';

import TaxClasses from '../components/admin/masters/taxclasses/TaxClasses';
import AddTaxClass from '../components/admin/masters/taxclasses/AddTaxClass';
import EditTaxClass from '../components/admin/masters/taxclasses/EditTaxClass';

import Countries from '../components/admin/masters/countries/Countries';
import AddCountry from '../components/admin/masters/countries/AddCountry';
import EditCountry from '../components/admin/masters/countries/EditCountry';

import States from '../components/admin/masters/states/States';
import AddState from '../components/admin/masters/states/AddState';
import EditState from '../components/admin/masters/states/EditState';

import Cities from '../components/admin/masters/cities/Cities';
import AddCity from '../components/admin/masters/cities/AddCity';
import EditCity from '../components/admin/masters/cities/EditCity';

import Industry from '../components/admin/masters/industry/Industry';
import AddIndustry from '../components/admin/masters/industry/AddIndustry';
import EditIndustry from '../components/admin/masters/industry/EditIndustry';

import Domain from '../components/admin/masters/domain/Domain';
import AddDomain from '../components/admin/masters/domain/AddDomain';
import EditDomain from '../components/admin/masters/domain/EditDomain';

import Technology from '../components/admin/masters/technology/Technology';
import AddTechnology from '../components/admin/masters/technology/AddTechnology';
import EditTechnology from '../components/admin/masters/technology/EditTechnology';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route exact path="/admin/masters/roles" component={Roles} />
      <Route exact path="/admin/masters/roles/add" component={AddRole} />
      <Route exact path="/admin/masters/roles/edit/:id" component={EditRole} />
      <Route exact path="/admin/masters/modules" component={Modules} />
      <Route exact path="/admin/masters/modules/add" component={AddModule} />
      <Route exact path="/admin/masters/modules/edit/:id" component={EditModule} />
      <Route exact path="/admin/masters/permissions" component={Permissions} />
      <Route exact path="/admin/masters/permissions/add" component={AddPermission} />
      <Route exact path="/admin/masters/permissions/edit/:id" component={EditPermission} />
      <Route exact path="/admin/masters/taxclasses" component={TaxClasses} />
      <Route exact path="/admin/masters/taxclasses/add" component={AddTaxClass} />
      <Route exact path="/admin/masters/taxclasses/edit/:id" component={EditTaxClass} />
      <Route exact path="/admin/masters/countries" component={Countries} />
      <Route exact path="/admin/masters/countries/add" component={AddCountry} />
      <Route exact path="/admin/masters/countries/edit/:id" component={EditCountry} />
      <Route exact path="/admin/masters/states" component={States} />
      <Route exact path="/admin/masters/states/add" component={AddState} />
      <Route exact path="/admin/masters/states/edit/:id" component={EditState} />
      <Route exact path="/admin/masters/cities" component={Cities} />
      <Route exact path="/admin/masters/cities/add" component={AddCity} />
      <Route exact path="/admin/masters/cities/edit/:id" component={EditCity} />

      <Route exact path="/admin/masters/industry" component={Industry} />
      <Route exact path="/admin/masters/industry/add" component={AddIndustry} />
      <Route exact path="/admin/masters/industry/edit/:id" component={EditIndustry} />

      <Route exact path="/admin/masters/domain" component={Domain} />
      <Route exact path="/admin/masters/domain/add" component={AddDomain} />
      <Route exact path="/admin/masters/domain/edit/:id" component={EditDomain} />

      <Route exact path="/admin/masters/technology" component={Technology} />
      <Route exact path="/admin/masters/technology/add" component={AddTechnology} />
      <Route exact path="/admin/masters/technology/edit/:id" component={EditTechnology} />
      <Route component={NotFound} />
    </Switch>
  );
}