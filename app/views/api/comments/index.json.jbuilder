@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :content, :author_id, :post_id
    end
end