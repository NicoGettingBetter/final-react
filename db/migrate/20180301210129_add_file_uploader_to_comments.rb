class AddFileUploaderToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :file, :string
  end
end
