FactoryGirl.define do
  factory :user do
    email           { Faker::Internet.email}
    password        { Devise.friendly_token(8)}
  end
end