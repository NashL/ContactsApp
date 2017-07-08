class ContactsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_contact, only: [:edit, :show, :update, :destroy]
  layout "contacts", only: [:index]
  layout "application"

  skip_before_action :verify_authenticity_token

  def index
    @contacts = current_user.contacts.order(updated_at: :desc).limit(10)
    respond_to do |format|
      format.html { @contacts }
      format.json { render json: @contacts.as_json, status: :ok}
    end
  end

  def show

  end

  def new
     @contact = Contact.new
  end

  def create
    respond_with current_user.contacts.create(contacts_params)
  end

  def update
    contact = @contact.update_attributes(contacts_params)
    respond_with contact, json: contact
  end

  def destroy
    respond_with Contact.destroy(params[:id])
  end

  def contacts_params
    params.permit(:name, :email, :phone, :address, :company, :bod, :age)
  end

  def set_contact
    @contact= Contact.find(params[:id])
  end
end