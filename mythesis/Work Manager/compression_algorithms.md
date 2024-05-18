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

### Mfcompress

- Used on Fasta and multi-fasta files
- Uses probabilistic models that comply with the markov property

### jarvis3

- Works on fasta and fastq files
- Lossless
- Uses neural networks

### Naf

- Based on zstandard
- Fasta and Fastq

### Agc

- Fasta
- Uses a reference genome to compress
- Uses zstd to compress small sequences


### Fqzcomp

- Fastq
- produces multiple compressed files
- Uses ZPAQ in higher levels of compression


### Quip

- Fastq, SAM/BAM
- Arithemetic encoding
- reference-based


### Leon

- Fasta/Fastq
- uses probabilistic de Bruijn Graph
- No need for reference genome
- Lossy by default but can be lossless



