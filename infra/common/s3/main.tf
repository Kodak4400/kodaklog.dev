resource "aws_s3_bucket" "terraform_state" {
  bucket = "${var.environment}.${var.project_prefix}.terraform.state"

  lifecycle {
    prevent_destroy = true
  }
}
