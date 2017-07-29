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
      #click_button "Sign up"
      #expect(page).to have_text("Welcome! You have signed up successfully.")
    end

    it "Sign in existence User" do


    #  visit "/users/sign_in"
   #   fill_in "Email", :with => @user.email
  #    fill_in "Password", :with => @user.password
 #     click_button "Log in"
#      expect(page).to have_text("Signed in successfully.")
    end
  end
end