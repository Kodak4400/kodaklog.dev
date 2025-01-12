output "s3_bucket_arn" {
  description = "The arn of the s3 bucket."
  value = aws_s3_bucket.terraform_state
}
