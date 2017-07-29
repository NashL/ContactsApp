require 'rails_helper'

RSpec.describe "Devise", :type => :request do

  describe Devise do
    before(:each) do
      @user = build(:user)
    end

    it "Sign up a new User" do
      visit "/users/sign_up"
      fill_in "Email", :with => @user.email
      fill_in "Password", :with => @user.password
      fill_in "Password confirmation", :with => @user.password
      click_button "Sign up"
      have_text("A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.")
    end

    it "Sign in existence User without authenticate email" do
      visit "/users/sign_in"
      fill_in "Email", :with => @user.email
      fill_in "Password", :with => @user.password
      click_button "Log in"
      have_text("You have to confirm your email address before continuing.")
    end
  end
end