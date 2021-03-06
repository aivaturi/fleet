import React from 'react';
import expect, { createSpy, restoreSpies } from 'expect';
import { mount } from 'enzyme';
import { noop } from 'lodash';

import ConfirmationPage from 'components/forms/RegistrationForm/ConfirmationPage';

describe('ConfirmationPage - form', () => {
  afterEach(restoreSpies);

  const formData = {
    username: 'jmeller',
    email: 'jason@kolide.co',
    org_name: 'Kolide',
    kolide_server_url: 'http://kolide.kolide.co',
  };

  it('renders the user information', () => {
    const form = mount(
      <ConfirmationPage
        formData={formData}
        handleSubmit={noop}
      />
    );

    expect(form.text()).toInclude(formData.username);
    expect(form.text()).toInclude(formData.email);
    expect(form.text()).toInclude(formData.org_name);
    expect(form.text()).toInclude(formData.kolide_server_url);
  });

  it('submits the form', () => {
    const handleSubmitSpy = createSpy();
    const form = mount(
      <ConfirmationPage
        formData={formData}
        handleSubmit={handleSubmitSpy}
      />
    );
    const htmlForm = form.find('form');

    htmlForm.simulate('submit');

    expect(handleSubmitSpy).toHaveBeenCalled();
  });
});

