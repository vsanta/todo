class User < ActiveRecord::Base
  def as_json(options = { })
    h = super(options)
    h[:tasks]   = []
    h
  end
end
