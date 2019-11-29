import React from 'react';
import Link from 'umi/link';

export default function() {
  return (
    <div>
      <h1>Details!</h1>
      <Link to="/users">Go to list page</Link>
    </div>
  );
}
