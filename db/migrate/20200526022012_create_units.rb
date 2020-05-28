class CreateUnits < ActiveRecord::Migration[5.2]
  def change
    create_table :units do |t|
      t.string :subject
      t.string :chapter
      t.string :section
      t.string :title
      t.string :auther
      t.string :url
      t.string :comment
      t.string :image
      t.string :string

      t.timestamps
    end
  end
end
