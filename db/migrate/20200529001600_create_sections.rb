class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :subject
      t.string :chapter
      t.string :section

      t.timestamps
    end
  end
end
