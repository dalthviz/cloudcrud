class Event < ApplicationRecord
    enum category: [:conferencia, :seminario, :congreso, :curso]
    enum assist_type: [:presencial, :virtual]
end
