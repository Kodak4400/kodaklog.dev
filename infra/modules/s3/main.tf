resource "aws_s3_bucket" "static_site_bucket" {
  bucket = "${var.environment}.${var.project_prefix}.static.site"
}

resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.static_site_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }

  routing_rule {
    condition {
      key_prefix_equals = "docs/"
    }
    redirect {
      replace_key_prefix_with = "documents/"
    }
  }
}
