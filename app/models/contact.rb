class Contact < ApplicationRecord
  belongs_to :user

  def calculate_age(dob)
    if dob
      now = Time.now.utc.to_date
      now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
    end
  end

  def as_json
    r = {}
    r[:id] = id
    r[:name] = name
    r[:phone] = phone
    r[:email] = email
    r[:address] = address
    r[:company] = company
    r[:bod] = bod
    r[:age] = calculate_age(bod)
    r
  end

end
