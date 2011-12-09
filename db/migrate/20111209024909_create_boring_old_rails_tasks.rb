class CreateBoringOldRailsTasks < ActiveRecord::Migration
  def self.up
    create_table :boring_old_rails_tasks do |t|
      t.string :lame_description
      t.boolean :complete_like_anyone_cares

      t.timestamps
    end
  end

  def self.down
    drop_table :boring_old_rails_tasks
  end
end
