class CreateResellers < ActiveRecord::Migration[7.2]
  def change
    create_table :resellers do |t|
      t.string :name

      t.timestamps
    end
  end
end
