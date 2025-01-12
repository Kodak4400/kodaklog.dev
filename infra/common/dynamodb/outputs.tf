output "dynamodb_table_name" {
  description = "The name of the dynamodb table"
  value = aws_dynamodb_table.terraform_state_lock_table
}
