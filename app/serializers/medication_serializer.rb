class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :dosage, :directions
end