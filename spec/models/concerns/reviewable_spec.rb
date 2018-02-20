shared_examples 'reviewable' do
  it { should have_many(:reviews) }
end
