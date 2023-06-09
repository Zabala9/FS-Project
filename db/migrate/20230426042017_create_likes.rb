class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :post, null: false, foreign_key: {to_table: :posts}
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
    add_index :likes, [:author_id, :post_id], unique: true
  end
end
