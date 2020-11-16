class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :medication, :time, :note
end
