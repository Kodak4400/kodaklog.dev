resource "aws_dynamodb_table" "terraform_state_lock_table" {
  name = "${var.environment}-${var.project_prefix}-terraform-state-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "LockID"
  
  attribute {
    name = "LockID"
    type = "S"
  }

  lifecycle {
    prevent_destroy = true
  }
}
