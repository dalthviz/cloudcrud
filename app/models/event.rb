class Event < ApplicationRecord
    enum category: { conferencia: 0, seminario: 1, congreso: 2, curso: 3 }
    enum type: { presencial: 0, virtual: 1}
end
