class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.belongs_to :task
      t.text :content

      t.json :attached_file

      t.timestamps
    end
  end
end
