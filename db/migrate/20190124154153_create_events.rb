class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :category
      t.string :place
      t.string :address
      t.datetime :start_date
      t.datetime :end_date
      t.integer :assist_type

      t.timestamps
    end
    add_index :events, :category
    add_index :events, :assist_type
  end
end
