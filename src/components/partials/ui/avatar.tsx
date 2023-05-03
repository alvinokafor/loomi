export default function Avatar() {
  return (
    <div className="h-8 w-8 overflow-hidden rounded-full">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
        alt="profile picture"
      />
    </div>
  );
}
