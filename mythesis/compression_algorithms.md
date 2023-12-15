## Info on compression algorithms


### Zstandard

- Develop by Facebook
- Lossless
- Compression rate comparable with DEFLATE but faster, especially on decompression
- https://datatracker.ietf.org/doc/html/rfc8878

### Gzip

- Used to replace the compress program because of the Unisys and IBM patents covering the LZW algorithm used by it.
- Baseado no DEFLATE
- Lossless

### Bzip2

- Uses the Burrows–Wheeler algorithm.
- More efficient compression compared to DEFLATE but slower.
- Efficient for text data.

### LZMA

- Lossless
- Used by the 7-zip archiver.
- Uses a ditionary compression algorithm


### Cmix

- Lossless
- Cpu/memory intensive
- context mixing, it uses several models to predict the next symbol.
- Uses several machine learning models

### PAQ1

- Lossless
- context mixing
- Arithmetic encoder that uses a weighted average of 5 bit-level predictors.

### nncp

- Lossless
- Uses neural networks
- Pure neural network models based on LSTM and Transform models.



