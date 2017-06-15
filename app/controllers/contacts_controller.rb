class ContactsController < ApplicationController
  def index
    user = current_user
    @contacts = user.contacts
  end
end
