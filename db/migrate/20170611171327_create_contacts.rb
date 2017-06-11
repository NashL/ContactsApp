class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name, null:false
      t.string :email
      t.string :phone
      t.string :address
      t.string :company
      t.date :bod

      t.timestamps
    end
    add_index :contacts, :email, unique:true
  end
end
