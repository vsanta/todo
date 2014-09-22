require 'rails_helper'

describe UsersController, :type => :controller do

  describe "POST create" do
    context "email does not exist" do
      it "creates a new user list with no tasks" do
        post :create, user: {email: "example@example.com"}, format: :json
        expect(assigns(:user)).to_not be_nil
      end

      it "reponse contains user and task info" do
        post :create, user: {email: "example@example.com"}, format: :json

        json =  JSON.parse response.body
        expect(json['email']).to eql "example@example.com"
        expect(json['tasks']).to eql []
      end

      it "returns an erro if user cant be saved" do
        user = double(:user)
        allow(User).to receive(:new) { user }
        expect(user).to receive(:save) { false }
        post :create, user: {email: "example@example.com"}, format: :json


        expect(response.status).to eq 400
      end
    end

  end

end
