class IncreasePrecisionForPaymentOrderBills < ActiveRecord::Migration[5.2]
  def change
    change_column :payment_order_bills, :total, :decimal, precision: 15, scale: 2
    change_column :payment_order_bills, :previous_debt, :decimal, precision: 15, scale: 2
  end
end