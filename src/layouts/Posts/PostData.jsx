const PostData = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        location: 'New York, USA',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      timestamp: '4:08pm',
      image: 'https://picsum.photos/seed/pic1/800/600',
      likes: 20,
      captions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      comments: [
        {
          id: 1,
          user: {
            name: 'Jane Smith',
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          },
          timestamp: '2 hours ago',
          text: 'This is a comment.',
          replies: [
            {
              id: 1,
              user: {
                name: 'Alice Johnson',
                avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
              },
              timestamp: '5 seconds ago',
              text: 'This is a reply to the comment.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      user: {
        name: 'Emily Brown',
        location: 'London, UK',
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      },
      timestamp: '5:30pm',
      image: 'https://picsum.photos/seed/pic2/800/600',
      likes: 15,
      captions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
      comments: [
        {
          id: 1,
          user: {
            name: 'Michael Johnson',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          },
          timestamp: '1 hour ago',
          text: 'Nice photo!',
          replies: [
            {
              id: 1,
              user: {
                name: 'Sophia Adams',
                avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
              },
              timestamp: '30 minutes ago',
              text: 'Thank you!',
            },
          ],
        },
      ],
    },
  ];
  
  export default PostData;
  