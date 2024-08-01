import React from 'react';
import { toast } from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardIcon } from '@heroicons/react/24/outline';

type Props = {
  generatedPassword: string;
};

export default function GeneratedPasswordCard({ generatedPassword }: Props) {
  const onCopyToClipboard = () => {
    toast.success('Copied!');
  };
  return (
    <div className="p-6 border rounded-lg shadow bg-gray-800 border-gray-700 mt-5 lg:mt-0">
      <p className="mb-3 font-normal text-gray-400">
        {generatedPassword != '' && generatedPassword
          ? generatedPassword
          : 'Your Password Here'}
      </p>

      <CopyToClipboard text={generatedPassword} onCopy={onCopyToClipboard}>
        <button
          type="button"
          disabled={generatedPassword == '' || !generatedPassword}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copy To Clipboard
          <ClipboardIcon width={15} height={15} className="ml-2" />
        </button>
      </CopyToClipboard>
    </div>
  );
}
