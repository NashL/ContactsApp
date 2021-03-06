require 'rails_helper'

describe ContactsController do
  login_user

  it "should have a current_user" do
     expect(subject.current_user).to_not eq(nil)
  end

  it "should get index" do
    get 'index'
      expect(response).to be_success
  end

end
