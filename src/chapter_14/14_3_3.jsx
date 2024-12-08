function Page(props) {
  const user = props.user;

  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  const content = <Feed user={user} />;

  return <PageLayout topBar={topBar} content={content} />;
}
