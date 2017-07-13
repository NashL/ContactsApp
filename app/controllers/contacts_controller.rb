class ContactsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_contact, only: [:edit, :show, :update, :destroy, :archive]
  layout "contacts", only: [:index]
  layout "application"

  skip_before_action :verify_authenticity_token

  def index
    @contacts = current_user.contacts.where(archived: false).order(updated_at: :desc).limit(10)
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
    current_user.contacts.create(contacts_params)
    render json: {}, status: :ok
  end

  def update
    @contact.update_attributes(contacts_params)
    render json: {}, status: :ok
  end

  def destroy
    Contact.destroy(params[:id])
    render json: {}, status: :ok
  end

  def archive
    @contact.archived = true
    @contact.save
    render json: {}, status: :ok
  end

  def archived
    @contacts = current_user.contacts.where(archived: true).order(updated_at: :desc).limit(10)
    respond_to do |format|
      format.html
      format.json {render json: @contacts.as_json, status: :ok}
    end
  end

  def contacts_params
    params.permit(:name, :email, :phone, :address, :company, :bod, :age)
  end

  def set_contact
    @contact= Contact.find(params[:id])
  end
end