The solution involves using `Promise.all` to ensure all update operations complete before moving on. This approach waits for all promises to resolve, thereby avoiding potential race conditions and ensuring data consistency.

```javascript
const updateFirestore = async (data) => {
  const promises = data.map(async (item) => {
    await db.collection('collectionName').doc(item.id).update(item.data);
  });

  await Promise.all(promises);
  console.log('All updates completed successfully!');
};
```