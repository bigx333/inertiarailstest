class CreateCustomers < ActiveRecord::Migration[7.2]
  def change
    create_table :customers do |t|
      t.string :name
      t.decimal :balance
      t.references :reseller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
