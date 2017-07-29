FactoryGirl.define do
  factory :contact do
    name      {Faker::Name.name}
    email     {Faker::Internet.email}
    phone     {Faker::PhoneNumber.phone_number}
    address   {Faker::Address.street_address}
    company   {Faker::Company.name}
  end
end