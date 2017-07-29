require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  context "With Login User" do
  login_user

    describe "Controller Methods>" do
      it "#POST should create a contact with current user" do
        post :create, params:{ :name => "Any Name", user: subject.current_user }
        expect(response.status).to eq(200)
      end
    end
  end

  context "Without Login User" do
    it "#POST should not create a contact without current user" do
      post :create, params:{ :name => "Any Name"}
      expect(response.status).to_not eq(200)
    end
  end

end
