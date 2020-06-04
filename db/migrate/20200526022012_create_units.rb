class CreateUnits < ActiveRecord::Migration[5.2]
  def change
    create_table :units do |t|
      t.string :title
      t.string :author
      t.string :url
      t.string :comment
      t.string :image

    end
  end
end
