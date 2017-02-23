Jekyll::Hooks.register :site, :pre_render do |site, payload|
  # Sort pinned posts up!
  # https://talk.jekyllrb.com/t/pinned-posts-like-wordpress/1595/4
  payload['site']['posts'].sort_by!{|p| [p.data['pinned'] ? 1:0, p.date]}.reverse!
end
