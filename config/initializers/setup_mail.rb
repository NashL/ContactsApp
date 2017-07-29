ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 587,
    :user_name            => 'no.reply.contacts.app@gmail.com',
    :password             => 'Wasd0123',
    :authentication       => :plain,
    :enable_starttls_auto => true,
    :domain               => 'domain.com'

}
