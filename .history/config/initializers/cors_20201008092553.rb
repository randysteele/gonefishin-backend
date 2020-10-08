# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://gonefishinbackend.herokuapp.com/api/v1/destinations', `https://gonefishinbackend.herokuapp.com/destinations/${destinationId}/comments`,
    `https://gonefishinbackend.herokuapp.com/api/v1/destinations/${destinationId}/features`, 
    `https://gonefishinbackend.herokuapp.com/api/v1/destinations/${destinationId}/features/${featureId}`,
    `https://gonefishinbackend.herokuapp.com/api/v1/destinations/${data.id}`
    
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end

end
